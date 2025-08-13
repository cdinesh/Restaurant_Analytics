// Synthetic Data for Zest Kitchen & Bar
const syntheticData = {
    // Revenue data for the last 7 days
    revenueData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [7000, 6700, 7200, 7800, 8500, 9000, 8200],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },

    // Menu performance data (donut chart)
    menuData: {
        labels: ['Truffle Pasta', 'Seafood Risotto', 'Caesar Salad', 'Chocolate Cake', 'Wine Pairing'],
        datasets: [{
            data: [35, 25, 20, 12, 8],
            backgroundColor: [
                '#FF6B35',
                '#3B82F6',
                '#10B981',
                '#F59E0B',
                '#8B5CF6'
            ],
            borderWidth: 0
        }]
    },

    // Category performance
    categoryData: {
        labels: ['Main Course', 'Appetizers', 'Desserts', 'Beverages', 'Specials'],
        datasets: [{
            label: 'Revenue ($)',
            data: [4200, 1800, 950, 1200, 1097],
            backgroundColor: [
                '#FF6B35',
                '#3B82F6',
                '#10B981',
                '#F59E0B',
                '#8B5CF6'
            ]
        }]
    },

    // Price sensitivity data
    priceData: {
        labels: ['$20', '$22', '$24', '$26', '$28', '$30'],
        datasets: [{
            label: 'Demand',
            data: [25, 23, 18, 15, 12, 8],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            tension: 0.4
        }]
    },

    // Customer journey data
    journeyData: {
        labels: ['Website Visit', 'Menu View', 'Order Placed', 'Payment', 'Review'],
        datasets: [{
            label: 'Conversion Rate (%)',
            data: [100, 78, 45, 42, 38],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },

    // Customer lifetime value
    clvData: {
        labels: ['New', '1-3 visits', '4-6 visits', '7-10 visits', '10+ visits'],
        datasets: [{
            label: 'Average Value ($)',
            data: [45, 78, 125, 189, 342],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },

    // Price elasticity
    elasticityData: {
        labels: ['-20%', '-10%', '0%', '+10%', '+20%'],
        datasets: [{
            label: 'Revenue Impact (%)',
            data: [-15, -5, 0, 8, 12],
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.4
        }]
    },

    // Revenue vs price changes
    revenuePriceData: {
        labels: ['Current', 'Optimized'],
        datasets: [{
            label: 'Revenue ($)',
            data: [8247, 10947],
            backgroundColor: ['#64748B', '#10B981']
        }]
    },

    // Inventory turnover
    turnoverData: {
        labels: ['Fresh Produce', 'Meat', 'Dairy', 'Pantry', 'Beverages'],
        datasets: [{
            label: 'Turnover Rate (days)',
            data: [3, 5, 7, 14, 10],
            backgroundColor: [
                '#10B981',
                '#F59E0B',
                '#3B82F6',
                '#8B5CF6',
                '#FF6B35'
            ]
        }]
    },

    // Waste analysis
    wasteData: {
        labels: ['Fresh Produce', 'Meat', 'Dairy', 'Pantry', 'Beverages'],
        datasets: [{
            label: 'Waste (%)',
            data: [8, 5, 3, 2, 1],
            backgroundColor: [
                '#EF4444',
                '#F59E0B',
                '#3B82F6',
                '#10B981',
                '#8B5CF6'
            ]
        }]
    },

    // Demand vs staffing
    demandData: {
        labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
        datasets: [{
            label: 'Demand',
            data: [10, 25, 85, 45, 95, 75, 30],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            tension: 0.4,
            fill: true
        }, {
            label: 'Staffing',
            data: [8, 12, 15, 10, 18, 14, 8],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },

    // Staff performance
    performanceData: {
        labels: ['Sarah', 'Mike', 'Emma', 'John', 'Maria', 'Alex'],
        datasets: [{
            label: 'Performance Score',
            data: [95, 88, 92, 85, 98, 90],
            backgroundColor: [
                '#10B981',
                '#3B82F6',
                '#8B5CF6',
                '#F59E0B',
                '#FF6B35',
                '#EF4444'
            ]
        }]
    },

    // Customer acquisition channels
    acquisitionData: {
        labels: ['Organic Search', 'Social Media', 'Email', 'Direct', 'Referrals'],
        datasets: [{
            label: 'New Customers',
            data: [45, 32, 28, 15, 12],
            backgroundColor: [
                '#10B981',
                '#3B82F6',
                '#8B5CF6',
                '#F59E0B',
                '#FF6B35'
            ]
        }]
    },

    // Email campaign performance
    emailData: {
        labels: ['Open Rate', 'Click Rate', 'Conversion', 'Revenue'],
        datasets: [{
            label: 'Performance (%)',
            data: [42, 18, 8, 340],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            tension: 0.4,
            fill: true
        }]
    }
};

// Chart.js configuration
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleColor: 'white',
            bodyColor: 'white',
            borderColor: '#FF6B35',
            borderWidth: 2,
            cornerRadius: 8,
            displayColors: true,
            titleFont: {
                family: 'Inter',
                size: 13,
                weight: '600'
            },
            bodyFont: {
                family: 'Inter',
                size: 12
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.05)',
                drawBorder: false
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                },
                color: '#64748b',
                callback: function(value) {
                    return '$' + value.toLocaleString();
                }
            }
        },
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.05)',
                drawBorder: false
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                },
                color: '#64748b'
            }
        }
    },
    elements: {
        point: {
            radius: 4,
            hoverRadius: 6,
            borderWidth: 2
        },
        line: {
            borderWidth: 3
        }
    }
};

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeCharts();
        initializeNavigation();
        updateDateTime();
        setInterval(updateDateTime, 1000);
        addInteractiveFeatures();
        addChartActions();
        initializeAIAssistant();
    }, 100);
});

// Initialize all charts
function initializeCharts() {
    // Revenue Chart
    new Chart(document.getElementById('revenueChart'), {
        type: 'line',
        data: syntheticData.revenueData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Daily Revenue Trend',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Menu Chart
    new Chart(document.getElementById('menuChart'), {
        type: 'doughnut',
        data: syntheticData.menuData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Top Menu Items',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Category Chart
    new Chart(document.getElementById('categoryChart'), {
        type: 'bar',
        data: syntheticData.categoryData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Category Performance',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Price Chart
    new Chart(document.getElementById('priceChart'), {
        type: 'line',
        data: syntheticData.priceData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Price Sensitivity Analysis',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Journey Chart
    new Chart(document.getElementById('journeyChart'), {
        type: 'line',
        data: syntheticData.journeyData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Customer Journey Conversion',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // CLV Chart
    new Chart(document.getElementById('clvChart'), {
        type: 'line',
        data: syntheticData.clvData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Customer Lifetime Value',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Elasticity Chart
    new Chart(document.getElementById('elasticityChart'), {
        type: 'line',
        data: syntheticData.elasticityData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Price Elasticity Analysis',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Revenue Price Chart
    new Chart(document.getElementById('revenuePriceChart'), {
        type: 'bar',
        data: syntheticData.revenuePriceData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Revenue Impact of Price Optimization',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Turnover Chart
    new Chart(document.getElementById('turnoverChart'), {
        type: 'bar',
        data: syntheticData.turnoverData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Inventory Turnover Rate',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Waste Chart
    new Chart(document.getElementById('wasteChart'), {
        type: 'doughnut',
        data: syntheticData.wasteData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Food Waste Analysis',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Demand Chart
    new Chart(document.getElementById('demandChart'), {
        type: 'line',
        data: syntheticData.demandData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Demand vs Staffing',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Performance Chart
    new Chart(document.getElementById('performanceChart'), {
        type: 'bar',
        data: syntheticData.performanceData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Staff Performance Scores',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Acquisition Chart
    new Chart(document.getElementById('acquisitionChart'), {
        type: 'doughnut',
        data: syntheticData.acquisitionData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Customer Acquisition Channels',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Email Chart
    new Chart(document.getElementById('emailChart'), {
        type: 'line',
        data: syntheticData.emailData,
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Email Campaign Performance',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    // Predictive Analytics Charts
    new Chart(document.getElementById('demandPredictionChart'), {
        type: 'bar',
        data: {
            labels: ['Grilled Salmon', 'Truffle Pasta', 'Caesar Salad', 'Seafood Risotto', 'Chocolate Cake'],
            datasets: [{
                label: 'Predicted Orders',
                data: [45, 38, 32, 28, 15],
                backgroundColor: '#FF6B35',
                borderColor: '#FF6B35',
                borderWidth: 1
            }, {
                label: 'Actual Orders',
                data: [42, 35, 30, 25, 12],
                backgroundColor: 'rgba(255, 107, 53, 0.3)',
                borderColor: '#FF6B35',
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Menu Item Demand Prediction',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('salesForecastChart'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Predicted Sales',
                data: [2800, 3200, 2900, 3500, 4200, 4800, 3800],
                borderColor: '#FF6B35',
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Actual Sales',
                data: [2750, 3150, 2850, 3450, 4150, 4750, 3750],
                borderColor: '#4ECDC4',
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Sales Per Menu Item Forecast',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('trafficForecastChart'), {
        type: 'line',
        data: {
            labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
            datasets: [{
                label: 'Predicted Traffic',
                data: [15, 25, 85, 35, 120, 95, 45],
                borderColor: '#FF6B35',
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Actual Traffic',
                data: [12, 22, 82, 32, 118, 92, 42],
                borderColor: '#4ECDC4',
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Customer Traffic Forecasting',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('revenueForecastChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Predicted Revenue',
                data: [85000, 92000, 88000, 95000, 102000, 108000, 112000, 118000, 105000, 98000, 92000, 95000],
                borderColor: '#FF6B35',
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Actual Revenue',
                data: [84500, 91800, 87500, 94800, 101500, 107500, 111500, 117500, 104500, 97500, 91800, 94800],
                borderColor: '#4ECDC4',
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Revenue Forecasting',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: '600'
                    }
                }
            }
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const analyticsBtn = document.querySelector('.analytics-btn');

    // Handle regular navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });


}

// AI Assistant Chat Functionality
function initializeAIAssistant() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    const quickButtons = document.querySelectorAll('.quick-btn');
    const reportContent = document.getElementById('reportContent');

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Simulate AI processing
        setTimeout(() => {
            const response = generateAIResponse(message);
            addMessage(response.message, 'ai');
            
            if (response.report) {
                displayReport(response.report);
            }
        }, 1000);
    }

    // Add message to chat
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <div class="message-content">
                ${sender === 'ai' ? content : `<p>${content}</p>`}
            </div>
            <span class="message-time">${time}</span>
        `;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Generate AI response based on user query
    function generateAIResponse(query) {
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('revenue') && lowerQuery.includes('trend')) {
            return {
                message: `<p>Here's your revenue trend analysis for the last 30 days:</p>
                         <ul>
                             <li>Total Revenue: $45,678 (up 12% from last month)</li>
                             <li>Average Daily Revenue: $1,523</li>
                             <li>Peak Days: Friday and Saturday</li>
                             <li>Growth Trend: Consistent upward trajectory</li>
                         </ul>`,
                report: generateRevenueReport()
            };
        } else if (lowerQuery.includes('menu') && lowerQuery.includes('profitable')) {
            return {
                message: `<p>Here's your most profitable menu items analysis:</p>
                         <ul>
                             <li>Truffle Pasta: 68% profit margin, $441 daily revenue</li>
                             <li>Seafood Risotto: 72% profit margin, $420 daily revenue</li>
                             <li>Caesar Salad: 75% profit margin, $300 daily revenue</li>
                             <li>Recommendation: Consider increasing prices on top performers</li>
                         </ul>`,
                report: generateMenuReport()
            };
        } else if (lowerQuery.includes('customer') && lowerQuery.includes('satisfaction')) {
            return {
                message: `<p>Here's your customer satisfaction analysis:</p>
                         <ul>
                             <li>Overall Rating: 4.7/5 stars</li>
                             <li>Service Satisfaction: 4.8/5</li>
                             <li>Food Quality: 4.9/5</li>
                             <li>Ambiance: 4.6/5</li>
                             <li>Recommendation: Focus on ambiance improvements</li>
                         </ul>`,
                report: generateCustomerReport()
            };
        } else {
            return {
                message: `<p>I can help you analyze:</p>
                         <ul>
                             <li>Revenue trends and patterns</li>
                             <li>Menu item profitability</li>
                             <li>Customer satisfaction metrics</li>
                             <li>Staffing efficiency</li>
                             <li>Marketing campaign performance</li>
                         </ul>
                         <p>Try asking about specific metrics or trends you'd like to explore!</p>`
            };
        }
    }

    // Generate revenue report
    function generateRevenueReport() {
        return {
            title: 'Revenue Trend Analysis',
            summary: 'Revenue has shown consistent growth over the past 30 days with a 12% increase compared to the previous month.',
            charts: [
                {
                    type: 'line',
                    title: 'Daily Revenue Trend',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [{
                            label: 'Revenue ($)',
                            data: [1200, 1350, 1420, 1580, 1650, 1800, 1750],
                            borderColor: '#4CAF50',
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4
                        }]
                    }
                },
                {
                    type: 'doughnut',
                    title: 'Revenue by Day of Week',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [{
                            data: [12, 15, 18, 20, 25, 28, 22],
                            backgroundColor: [
                                '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B',
                                '#FF9800', '#FF5722', '#9C27B0'
                            ],
                            borderWidth: 2,
                            borderColor: '#ffffff'
                        }]
                    }
                }
            ],
            table: {
                title: 'Revenue Summary',
                headers: ['Metric', 'Value', 'Change'],
                data: [
                    ['Total Revenue', '$45,678', '+12%'],
                    ['Average Daily', '$1,523', '+8%'],
                    ['Peak Day', 'Saturday', 'N/A'],
                    ['Lowest Day', 'Monday', 'N/A']
                ]
            }
        };
    }

    // Generate menu report
    function generateMenuReport() {
        return {
            title: 'Menu Profitability Analysis',
            summary: 'Analysis of menu item performance shows strong profitability across main courses with opportunities for price optimization.',
            charts: [
                {
                    type: 'bar',
                    title: 'Profit Margin by Item',
                    data: {
                        labels: ['Truffle Pasta', 'Seafood Risotto', 'Caesar Salad', 'Chocolate Cake'],
                        datasets: [{
                            label: 'Profit Margin %',
                            data: [68, 72, 75, 45],
                            backgroundColor: ['#4CAF50', '#8BC34A', '#CDDC39', '#FF5722']
                        }]
                    }
                },
                {
                    type: 'pie',
                    title: 'Revenue Distribution',
                    data: {
                        labels: ['Main Courses', 'Appetizers', 'Desserts', 'Beverages'],
                        datasets: [{
                            data: [45, 25, 20, 10],
                            backgroundColor: ['#4CAF50', '#8BC34A', '#CDDC39', '#FF9800']
                        }]
                    }
                }
            ],
            table: {
                title: 'Top Performing Items',
                headers: ['Item', 'Price', 'Daily Revenue', 'Profit Margin', 'Recommendation'],
                data: [
                    ['Truffle Pasta', '$24.50', '$441', '68%', 'Increase price by $2.50'],
                    ['Seafood Risotto', '$28.00', '$420', '72%', 'Maintain current price'],
                    ['Caesar Salad', '$12.00', '$300', '75%', 'Promote as healthy option'],
                    ['Chocolate Cake', '$9.50', '$76', '45%', 'Consider reformulation']
                ]
            }
        };
    }

    // Generate customer report
    function generateCustomerReport() {
        return {
            title: 'Customer Satisfaction Analysis',
            summary: 'Overall customer satisfaction is excellent at 4.7/5 stars with food quality being the highest rated aspect.',
            charts: [
                {
                    type: 'radar',
                    title: 'Satisfaction by Category',
                    data: {
                        labels: ['Food Quality', 'Service', 'Ambiance', 'Value', 'Cleanliness'],
                        datasets: [{
                            label: 'Rating',
                            data: [4.9, 4.8, 4.6, 4.5, 4.7],
                            borderColor: '#4CAF50',
                            backgroundColor: 'rgba(76, 175, 80, 0.2)'
                        }]
                    }
                },
                {
                    type: 'bar',
                    title: 'Satisfaction Trends',
                    data: {
                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                        datasets: [{
                            label: 'Average Rating',
                            data: [4.6, 4.7, 4.8, 4.7],
                            backgroundColor: '#4CAF50'
                        }]
                    }
                }
            ],
            table: {
                title: 'Satisfaction Metrics',
                headers: ['Category', 'Rating', 'Comments', 'Action Required'],
                data: [
                    ['Food Quality', '4.9/5', 'Excellent taste and presentation', 'None'],
                    ['Service', '4.8/5', 'Friendly and efficient staff', 'None'],
                    ['Ambiance', '4.6/5', 'Good atmosphere, could improve lighting', 'Consider lighting upgrade'],
                    ['Value', '4.5/5', 'Fair pricing for quality', 'None'],
                    ['Cleanliness', '4.7/5', 'Very clean environment', 'None']
                ]
            }
        };
    }

    // Display report
    function displayReport(report) {
        const reportHTML = `
            <div class="generated-report">
                <div class="report-summary">
                    <h4>${report.title}</h4>
                    <p>${report.summary}</p>
                </div>
                
                <div class="report-charts">
                    ${report.charts.map((chart, index) => `
                        <div class="report-chart">
                            <h5>${chart.title}</h5>
                            <canvas id="reportChart${index}" width="300" height="200"></canvas>
                        </div>
                    `).join('')}
                </div>
                
                <div class="report-table">
                    <h5>${report.table.title}</h5>
                    <table>
                        <thead>
                            <tr>
                                ${report.table.headers.map(header => `<th>${header}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${report.table.data.map(row => `
                                <tr>
                                    ${row.map(cell => `<td>${cell}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        reportContent.innerHTML = reportHTML;
        
        // Initialize charts
        setTimeout(() => {
            report.charts.forEach((chart, index) => {
                const ctx = document.getElementById(`reportChart${index}`);
                if (ctx) {
                    new Chart(ctx, {
                        type: chart.type,
                        data: chart.data,
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        padding: 10,
                                        usePointStyle: true,
                                        font: {
                                            size: 11
                                        }
                                    }
                                },
                                title: {
                                    display: false
                                }
                            },
                            scales: chart.type === 'line' || chart.type === 'bar' ? {
                                x: {
                                    ticks: {
                                        font: {
                                            size: 10
                                        }
                                    }
                                },
                                y: {
                                    ticks: {
                                        font: {
                                            size: 10
                                        }
                                    }
                                }
                            } : {},
                            elements: {
                                point: {
                                    radius: 3
                                },
                                line: {
                                    tension: 0.4
                                }
                            }
                        }
                    });
                }
            });
        }, 200);
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    quickButtons.forEach(button => {
        button.addEventListener('click', () => {
            const query = button.getAttribute('data-query');
            chatInput.value = query;
            sendMessage();
        });
    });
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

// Add interactive features
function addInteractiveFeatures() {
    // Add hover effects to KPI cards
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add table row hover effects
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '#f8fafc';
            row.style.transform = 'scale(1.01)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
            row.style.transform = 'scale(1)';
        });
    });

    // Add insight card interactions
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add a subtle animation
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add alert card interactions
    const alertCards = document.querySelectorAll('.alert-card');
    alertCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add campaign card interactions
    const campaignCards = document.querySelectorAll('.campaign-card');
    campaignCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add segment card interactions
    const segmentCards = document.querySelectorAll('.segment-card');
    segmentCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add schedule slot interactions
    const scheduleSlots = document.querySelectorAll('.schedule-slot');
    scheduleSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            slot.style.backgroundColor = '#e2e8f0';
            setTimeout(() => {
                slot.style.backgroundColor = '#f8fafc';
            }, 300);
        });
    });
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Simulate real-time data updates
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Update KPI values with small random changes
        const kpiValues = document.querySelectorAll('.kpi-value');
        kpiValues.forEach(value => {
            const currentValue = parseFloat(value.textContent.replace(/[^0-9.]/g, ''));
            const change = (Math.random() - 0.5) * 0.02; // ±1% change
            const newValue = currentValue * (1 + change);
            
            if (value.textContent.includes('$')) {
                value.textContent = '$' + Math.round(newValue).toLocaleString();
            } else if (value.textContent.includes('/')) {
                // Handle ratings like "4.7/5.0"
                const parts = value.textContent.split('/');
                const newRating = Math.max(4.0, Math.min(5.0, parseFloat(parts[0]) + (Math.random() - 0.5) * 0.1));
                value.textContent = newRating.toFixed(1) + '/' + parts[1];
            } else {
                value.textContent = Math.round(newValue).toLocaleString();
            }
        });

        // Update change indicators
        const changeElements = document.querySelectorAll('.kpi-change');
        changeElements.forEach(element => {
            const change = (Math.random() - 0.5) * 0.1; // ±5% change
            const isPositive = change > 0;
            element.textContent = (isPositive ? '+' : '') + (change * 100).toFixed(1) + '% vs yesterday';
            element.className = 'kpi-change ' + (isPositive ? 'positive' : 'negative');
        });
    }, 30000); // Update every 30 seconds
}

// Start real-time updates
simulateRealTimeUpdates();

// Add loading states for better UX
function addLoadingStates() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const originalText = button.textContent;
            button.textContent = 'Loading...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    });
}

// Initialize loading states
addLoadingStates();

// Add smooth scrolling for navigation
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
addSmoothScrolling();

// Add keyboard navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const sections = ['dashboard', 'menu', 'customers', 'pricing', 'inventory', 'staffing', 'marketing'];
        const currentSection = document.querySelector('.section.active');
        const currentIndex = sections.indexOf(currentSection.id);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % sections.length;
            navigateToSection(sections[nextIndex]);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
            navigateToSection(sections[prevIndex]);
        }
    });
}

function navigateToSection(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    const targetLink = document.querySelector(`[href="#${sectionId}"]`);
    const targetSection = document.getElementById(sectionId);
    
    if (targetLink && targetSection) {
        targetLink.classList.add('active');
        targetSection.classList.add('active');
    }
}

// Initialize keyboard navigation
addKeyboardNavigation();

// Add tooltip functionality
function addTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = element.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Add tooltip styles
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
    }
`;
document.head.appendChild(tooltipStyle);

// Initialize tooltips
addTooltips();

// Add export functionality
function addExportFunctionality() {
    const exportButtons = document.querySelectorAll('.btn-export');
    exportButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('.section');
            const sectionName = section.id;
            
            // Simulate export
            button.textContent = 'Exporting...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Exported!';
                setTimeout(() => {
                    button.textContent = 'Export Data';
                    button.disabled = false;
                }, 2000);
            }, 1500);
        });
    });
}

// Initialize export functionality
addExportFunctionality();

// Add search functionality
function addSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('.data-table tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}

// Initialize search functionality
addSearchFunctionality();

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-info {
        background: #3B82F6;
    }
    
    .notification-success {
        background: #10B981;
    }
    
    .notification-warning {
        background: #F59E0B;
    }
    
    .notification-error {
        background: #EF4444;
    }
`;
document.head.appendChild(notificationStyle);

// Add demo notifications
setTimeout(() => {
    showNotification('Welcome to Zest Kitchen & Bar Analytics Dashboard!', 'info');
}, 1000);

setTimeout(() => {
    showNotification('AI insights updated with latest data', 'success');
}, 5000);

// Add print functionality
function addPrintFunctionality() {
    const printButtons = document.querySelectorAll('.btn-print');
    printButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.print();
        });
    });
}

// Initialize print functionality
addPrintFunctionality();

// Add fullscreen functionality
function addFullscreenFunctionality() {
    const fullscreenButtons = document.querySelectorAll('.btn-fullscreen');
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('.section');
            if (section.requestFullscreen) {
                section.requestFullscreen();
            }
        });
    });
}

// Initialize fullscreen functionality
addFullscreenFunctionality();

// Add chart action functionality
function addChartActions() {
    const exportButtons = document.querySelectorAll('.btn-chart-action[title="Export"]');
    const fullscreenButtons = document.querySelectorAll('.btn-chart-action[title="Fullscreen"]');
    
    exportButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chartContainer = button.closest('.chart-container');
            const chartTitle = chartContainer.querySelector('h3').textContent;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            setTimeout(() => {
                showNotification(`${chartTitle} data exported successfully!`, 'success');
                button.innerHTML = '<i class="fas fa-download"></i>';
                button.disabled = false;
            }, 1500);
        });
    });
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chartContainer = button.closest('.chart-container');
            const chartWrapper = chartContainer.querySelector('.chart-wrapper');
            
            if (chartWrapper.requestFullscreen) {
                chartWrapper.requestFullscreen();
            }
        });
    });
}

console.log('Zest Kitchen & Bar AI Analytics Dashboard initialized successfully!');
console.log('Features loaded:');
console.log('- Interactive navigation');
console.log('- Real-time data updates');
console.log('- Responsive design');
console.log('- Chart.js visualizations');
console.log('- Synthetic data simulation');
console.log('- Keyboard navigation');
console.log('- Export functionality');
console.log('- Notification system');
console.log('- Chart actions and fullscreen support'); 